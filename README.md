# MADARASATUL HAYATUL ISLAM KIDANDAN
Address: Anguwan Kawo Kidandan
Email: madarastulhayatulislamkdd@gmail.com

## Roles
- Super Admin: full control.
- Registration Officer: register and update student registration records; cannot manage staff roles or delete students.
- Exam Officer: create exams/subjects, assign classes, enter results and manage examination records.
- Teacher: reserved for future teacher functions.
- Student: private student dashboard with own results and password/account access.
- No Parent Portal.

## Sections and levels
Islamiyya: Pre-Ibtidaiyya 1-2, Ibtidaiyya 1-6.
Hifz: Hifz 1-6.
Academy: Nursery, Primary, Secondary.

## Default subjects
### Hifz
- Qur'an
- Tajweed

### Islamiyya
- Qur'an
- Hadith
- Sirah
- Arabia
- Fiqhu
- Aqeedat
- Azkar

### Academy
- English Studies
- Mathematics
- Hausa
- Arabic
- Islamic Studies
- Basic Science
- Social Studies
- Computer Studies

Default subjects are only starting suggestions. Exam Officer can write a different subject, add a subject, or use any subject name, then assign one or more classes/levels to that examination. The selected classes are the only students available for result entry.

## Result flow
1. Exam Officer selects Academic Session, Term, Section, writes/selects Subject, and checks the classes/levels that will take it.
2. The system creates the exam/subject with the assigned classes.
3. Exam Officer enters scores from 0-100. Grades are calculated automatically: A=70+, B=60-69, C=50-59, D=45-49, E=40-44, F=below 40.
4. Saved results are linked to the student's Firebase UID and appear in that student's dashboard only.
5. Results are grouped by Academic Session and Term.

## Firebase setup
1. Enable Email/Password Authentication and Firestore.
2. Put your Firebase Web App configuration in `js/firebase-config.js`.
3. Publish `firestore.rules`.
4. Create staff Firebase Auth accounts and add `users/{UID}` documents with role values: `admin`, `registration_officer`, `exam_officer`.
5. Create each student Firebase Auth account and add `users/{UID}` with role `student`.
6. Link the student's Firestore `students/{documentId}` record to that Auth UID using the `uid` field. The student's results use the same UID.
7. Run through a local server such as VS Code Live Server.

## Important
The package intentionally has no Parent Portal.
