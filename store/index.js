export const actions = {
	nuxtServerInit({ dispatch, commit, state }) {
		const { token } = state.auth

		if (token) {
			try {
				// fetch user data
			} catch (e) {
				// logout
			}
		}
	},
}