const outlook = require('node-outlook')
const google = require('googleapis')

// outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0')
// outlook.base.anchorMailbox('sanan_kazimov@outlook.com')
// outlook.base.setPreferredTimeZone('Eastern Standard Time')
//
// const requestUrl = outlook.base.apiEndpoint() + ' /Me/CalendarView'




const oauth2 = google.oauth2_v2
const calendar = google.calendar_v3

