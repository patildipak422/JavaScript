let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetingsDone : 0
}

let addMeeting = function(myTodos, meet=0){
    myTodos.meetings = myTodos.meetings + meet
}

let meetDone = function(myTodos, meet=0) {
    myTodos.meetingsDone = meet
}

let getSummaryOfDay = function(myTodos){
    let meetLeft = myTodos.meetings - myTodos.meetingsDone
    console.log('You have ' + meetLeft + ' meetings Left')
}

addMeeting(myTodos, 4);

addMeeting(myTodos, 2);

meetDone(myTodos, 5);
getSummaryOfDay(myTodos)
