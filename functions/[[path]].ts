export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  const isPagesDevHost =
    url.hostname === "homelyfusion.pages.dev" ||
    url.hostname.endsWith(".homelyfusion.pages.dev");

  if (isPagesDevHost) {
    url.hostname = "homelyfusion.com";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
