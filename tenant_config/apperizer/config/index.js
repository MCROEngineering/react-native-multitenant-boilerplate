
const logoPNG = require('./logo.png');

export default {
  // library
  home: {
    showBannerSection: true,
  },
  catalog: {
    catalogOptionsList: ['overdrive', 'test'],
    catalogMainPageOptionList: 'overdrive',
    hasBrowse: true,
    hasReservations: true,
    hasHistory: true,
    hasFavorites: true,
    hasRating: true,
    hasReviews: false,
    knownNumberOfCopies: true
  },
  roomBooking: false,
  libraryLocator: {},
  events: {
    basicItems: true,
    hasSubscriptions: false,
    hasRegistration: false,
    hasReservations: false
  },
  onlineResources: true,

  // management
  myAccount: {
    hasActivity: true, // for MyAccount, to hide the Activity section
    hasChangeEmail: true,
    showDefaultProfile: true
  },
  manageAccounts: false,
  myLibraryCards: true,
  myLibraryCardsRequireSecurityCheck: true,
  myAgenda: false,
  donate: false,
  settings: {
    sendFeedback: false
  },

  // interactive
  barcodeScanner: true,
  reader: false,
  bookLook: false,
  barcodeWallet: true,
  bookCheck: false,
  challenges: false,

  // information
  contact: {},
  help: {
    showFeedbackRequest: false,
    showUsefulArticle: false
  },
  sendFeedback: {},
  termsOfUse: {},
  privacyPolicy: {},

  // feeds
  twitter: false,

  // social
  social: {},

  // push notifications
  pushNotifications: false,
  colors: {
    appPrimaryLight: '#33B0E2',
    appPrimary: '#005AA7',
    appPrimaryDark: '#007DAF',
    background: '#FFFFFF',
    accentColor: '#005AA7',
    grayLight: '#FAFAFA',
    grayMediumLight: '#cccccc',
    grayMedium: '#707070',
    grayDark: '#212121',
    separator: '#EEEEEE',
    gold: '#FFB300',
    error: '#FF3B30',
    warning: '#FFA726',
    success: '#4CD964',
    info: '#157EFC',
    white: '#FFFFFF',
    disabled: 'lightgray',
    yellow: '#FEEC34',
    yellowDark: '#DFC824',
    greenLight: '#F1F8F0'
  },

  // Text transformation
  upperCaseLabels: true,

  // Buttons style
  buttonsBackgroundFilled: true,

  // app logo

  appLogoPNG: logoPNG
};
