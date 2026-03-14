import { NextResponse } from "next/server"

const MIN_MESSAGE_LENGTH = 10
const DEFAULT_PROPOSAL_MESSAGE = "Ola! Gostaria de receber uma proposta comercial para o meu estabelecimento."

type ParsedProposalEmailRequest = {
  name: string
  email: string
  phone: string | null
  company: string | null
  restaurant: string | null
  message: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

function asOptionalTrimmedString(value: unknown, maxLength: number): string | null {
  const text = asTrimmedString(value)

  if (!text) {
    return null
  }

  return text.slice(0, maxLength)
}

function parseProposalEmailRequest(body: unknown): ParsedProposalEmailRequest | null {
  if (!body || typeof body !== "object") {
    return null
  }

  const data = body as Record<string, unknown>
  const name = asTrimmedString(data.name).slice(0, 120)
  const email = asTrimmedString(data.email).slice(0, 255)
  const phone = asOptionalTrimmedString(data.phone, 30)
  const company = asOptionalTrimmedString(data.company, 120)
  const restaurant = asOptionalTrimmedString(data.restaurant, 120)
  const rawMessage = asTrimmedString(data.message).slice(0, 4000)

  if (name.length < 2) {
    return null
  }

  if (email.length < 5 || !EMAIL_REGEX.test(email)) {
    return null
  }

  const message =
    rawMessage.length >= MIN_MESSAGE_LENGTH ? rawMessage : DEFAULT_PROPOSAL_MESSAGE

  return {
    name,
    email,
    phone,
    company: company ?? restaurant,
    restaurant,
    message,
  }
}

export async function handleProposalEmailRequest(request: Request) {
  try {
    const body = (await request.json()) as unknown
    const parsed = parseProposalEmailRequest(body)

    if (!parsed) {
      return NextResponse.json(
        { error: "Campos obrigatorios nao preenchidos ou invalidos" },
        { status: 400 }
      )
    }

    const emailData = {
      to: "leonardoti.dev@gmail.com",
      subject: `[Cardapio Pro] Nova solicitacao de ${parsed.name}`,
      html: `
        <h2>Nova solicitacao de proposta</h2>
        <p><strong>Nome:</strong> ${parsed.name}</p>
        <p><strong>E-mail:</strong> ${parsed.email}</p>
        <p><strong>Telefone:</strong> ${parsed.phone || "Nao informado"}</p>
        <p><strong>Empresa:</strong> ${parsed.company || "Nao informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${parsed.message}</p>
      `,
    }

    console.log("Proposal email data:", emailData)

    return NextResponse.json(
      { success: true, message: "Proposta enviada com sucesso." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao processar proposta:", error)
    return NextResponse.json({ error: "Erro ao enviar proposta" }, { status: 500 })
  }
}
