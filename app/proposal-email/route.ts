import { handleProposalEmailRequest } from "@/lib/proposal-email"

export async function POST(request: Request) {
  return handleProposalEmailRequest(request)
}
