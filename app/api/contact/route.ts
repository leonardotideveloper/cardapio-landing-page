import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, restaurant, message } = body

    // Validação básica
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      )
    }

    // Envia email usando o serviço de email do Vercel ou outro serviço
    // Por enquanto, vamos simular o envio e logar os dados
    // Para produção, integre com Resend, SendGrid, ou outro serviço de email
    
    const emailData = {
      to: "leonardoti.dev@gmail.com",
      subject: `[Cardápio Pro] Nova solicitação de ${name}`,
      html: `
        <h2>Nova solicitação de proposta</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Estabelecimento:</strong> ${restaurant || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message || "Nenhuma mensagem adicional"}</p>
      `,
    }

    // Log para desenvolvimento
    console.log("Email data:", emailData)

    // Para integrar com um serviço de email real, descomente e configure:
    // await resend.emails.send({
    //   from: 'Cardápio Pro <contato@cardapiopro.com.br>',
    //   to: emailData.to,
    //   subject: emailData.subject,
    //   html: emailData.html,
    // })

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    )
  }
}
