/**
 * Represents a server secured session object.
 */
export interface Session {
	/**
	 * The ID of the user associated with the session.
	 */
	userId: string;

	/**
	 * The ID of the organization associated with the session.
	 */
	organizationId: string;
}
