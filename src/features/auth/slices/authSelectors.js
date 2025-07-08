// Selectores para el estado de autenticación

/**
 * Selector para obtener todo el estado de autenticación
 * @param {Object} state - Estado completo de la aplicación
 * @returns {Object} - Estado de autenticación
 */
export const selectAuth = (state) => state.auth;

/**
 * Selector para obtener el usuario actual
 * @param {Object} state - Estado completo de la aplicación
 * @returns {Object|null} - Usuario actual o null
 */
export const selectUser = (state) => state.auth.user;

/**
 * Selector para verificar si el usuario está autenticado
 * @param {Object} state - Estado completo de la aplicación
 * @returns {boolean} - True si está autenticado
 */
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

/**
 * Selector para verificar si se está cargando la autenticación
 * @param {Object} state - Estado completo de la aplicación
 * @returns {boolean} - True si está cargando
 */
export const selectIsLoading = (state) => state.auth.isLoading;

/**
 * Selector para obtener el error de autenticación
 * @param {Object} state - Estado completo de la aplicación
 * @returns {string|null} - Mensaje de error o null
 */
export const selectError = (state) => state.auth.error;
