import { Resource } from "sst"

export async function GET() {

  const secret = Resource.MySecret.value
  return Response.json({ data: secret })
}
