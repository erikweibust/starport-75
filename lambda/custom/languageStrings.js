/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: 'Welcome to Star Port 75 Travel. How can I help you?',
            HELLO_MSG: 'Have a stellar day!',
            HELP_MSG: 'You can say hello to me! How can I help?',
            GOODBYE_MSG: 'Later!',
            REFLECTOR_MSG: 'You just triggered {{intentName}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.'
        }
    }
}