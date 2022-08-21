import axios from "axios";

export async function fetchUser(ctx: any) {
  try {
    const user = (
      await axios.get("http://api.britsov.uk/api/auth/status", {
        withCredentials: true,
        headers: { Cookie: `connect.sid=${ctx.req.cookies["connect.sid"]}` },
      })
    ).data;
    return { props: { user: user } };
  } catch (err) {
    if (ctx.resolvedUrl !== "/") {
      ctx.res.writeHead(302, { location: "/" });
      ctx.res.end();
    }
    return { props: { user: null } };
  }
}
