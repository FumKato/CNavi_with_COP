// name, day, period, semester
Classes = new Meteor.Collection('classes');

//id(not _id), name, password, role, classes
Users = new Meteor.Collection('users');

//class_id, name, type
Lessons = new Meteor.Collection('lessons');

Questions = new Meteor.Collection('questions');

//lesson_id, student_id, type, content
Submissions = new Meteor.Collection('submissions');
