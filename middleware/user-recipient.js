export default function ({store, redirect}) {
    if (!store.getters['user/getRecipient']) {
        redirect('/')
    }
}
