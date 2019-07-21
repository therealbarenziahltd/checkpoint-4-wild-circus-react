export default function prettifyDate (dateString) {
  if (dateString) {
    let murricanBirthdate = dateString.split('T')[0].split('-');
    let prettyDate = murricanBirthdate[2] + '/' + murricanBirthdate[1] + '/' + murricanBirthdate[0];
    return prettyDate;
  }
  else return 'Date inconnue';
}