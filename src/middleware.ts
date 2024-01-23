import { NextRequest, NextResponse } from "next/server";
// import { get } from "@vercel/edge-config";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

const paths = ["/coming-soon", "/maintenance", "/privacy-policy", "/terms"];

export async function middleware(req: NextRequest) {
  if (!process.env.EDGE_CONFIG) {
    req.nextUrl.pathname = `/edge-error`;
    return NextResponse.rewrite(req.nextUrl);
  }

  if (paths.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  try {
    // Check whether the maintenance page should be shown
    // const isInMaintenanceMode = await get<boolean>("isInMaintenanceMode");
    const mode = process.env.MODE;
    const comingSoon = process.env.MODE;

    // If is in maintenance mode, point the url pathname to the maintenance page
    if (mode === "true" && comingSoon === "true") {
      req.nextUrl.pathname = `/coming-soon`;

      // Rewrite to the url
      return NextResponse.rewrite(req.nextUrl);
    }

    req.nextUrl.pathname = "/maintenance";
    return NextResponse.rewrite(req.nextUrl);
  } catch (error) {
    // show the default page if EDGE_CONFIG env var is missing,
    // but log the error to the console
    console.error(error);
  }
}
