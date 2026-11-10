// Target Harian - backend Google Sheets
// Pasang di Extensions > Apps Script pada Google Sheet Anda.
// Deploy > New deployment > Web app: Execute as "Me", Who has access "Anyone".
const SH = 'Data';

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SH) || ss.insertSheet(SH);
}

function doPost(e) {
  const s = sheet_(), t = e.postData.contents, rows = [];
  for (let i = 0; i < t.length; i += 40000) rows.push([t.slice(i, i + 40000)]);
  s.clear();
  s.getRange(1, 1, rows.length, 1).setValues(rows);
  return ContentService.createTextOutput('ok');
}

function doGet() {
  const s = sheet_(), n = s.getLastRow();
  const t = n ? s.getRange(1, 1, n, 1).getValues().map(r => r[0]).join('') : '{}';
  return ContentService.createTextOutput(t).setMimeType(ContentService.MimeType.JSON);
}
