// Synthetic HTML in the embedded-query format used by Instaloader.
export const profilePageResponse = (user: Record<string, unknown>) => ({
    ok: true,
    text: async () => '<script type="application/json">'+JSON.stringify({
        require: [["ScheduledServerJS", "handle", [{ __bbox: { result: { data: {
            xig_user_by_username: { ...user, pk: user.pk ?? user.id },
        } } } }]]],
    })+'</script>',
});
