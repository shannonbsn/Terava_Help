export default function createApiResponse(success, content, status) {
    return {
        succès: success,
        contenu: content,
        statut: status ?? undefined
    };
}
