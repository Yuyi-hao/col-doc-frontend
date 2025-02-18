// Accounts endpoints
export const API_URL_USER_PROFILE = "/accounts/me";
export const API_URL_USER_REGISTER = "/accounts/register/";
export const API_URL_USER_LOGIN = "/accounts/login/";
export const API_URL_USER_LOGOUT = "/accounts/logout/";
export const API_URL_USER_PASSWORD_CHANGE = "/accounts/password-change/";
export const API_URL_USER_PASSWORD_RESET_REQUEST = "/accounts/password-reset-request/";
export const API_URL_USER_PASSWORD_RESET = (uid, token) => `/accounts/reset-password/${uid}/${token}/`;
export const API_URL_REFRESH_ACCESS_TOKEN = "/accounts/token/refresh/";

// Documents API_URL_endpoints
export const API_URL_DOCUMENTS_PUBLIC = (documentSlug) => `/documents/public/${documentSlug}`;
export const API_URL_DOCUMENTS_USER = "/documents/me/documents";
export const API_URL_CREATE_DOCUMENT = "/documents/me/create/";
export const API_URL_UPDATE_DOCUMENT = (documentSlug) => `/documents/me/${documentSlug}/edit/`;
export const API_URL_VIEW_DOCUMENT = (documentSlug) => `/documents/me/${documentSlug}/view`;
export const API_URL_DELETE_DOCUMENT = (documentSlug) => `/documents/me/${documentSlug}/delete/`;

// Document sAPI_URL_hare
export const API_URL_MODIFY_DOCUMENT_PERMISSION = (documentSlug) => `/documents/me/${documentSlug}/modify_permission/`;
export const API_URL_DOCUMENT_SHARE_LIST = (documentSlug) => `/documents/me/${documentSlug}/share_list`;

// Document rAPI_URL_equests
export const API_URL_LIST_DOCUMENT_REQUESTS = "/documents/me/requests";
export const API_URL_DOC_SHARE_REQUEST_REPLY = (requestSlug) => `/documents/me/request/${requestSlug}/reply/`;
export const API_URL_DELETE_DOCUMENT_REQUEST = (requestSlug) => `/documents/me/requests/${requestSlug}/delete/`;

// Document pAPI_URL_ermissions
export const API_URL_MARK_DOC_PUBLIC_OR_PRIVATE = (documentSlug) => `/documents/me/${documentSlug}/mark_public_or_private/`;

// NotificatiAPI_URL_ons
export const API_URL_NOTIFICATIONS = "/notifications/notifications";
export const API_URL_MARK_NOTIFICATION = (notificationId) => `/notifications/notifications/${notificationId}/mark/`;
export const API_URL_DELETE_NOTIFICATION = (notificationId) => `/notifications/notifications/${notificationId}/delete/`;
