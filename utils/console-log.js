function logFunction(){
    console.log('This is a log message.');
    console.warn('This is a warning message.');
    console.error('This is an error message.');
    console.info('This is an informational message.');

    const data = [
        {name: 'Alice', age:30},
        {name: 'Bob', age: 25}
    ]; 
    console.table(data);


    console.group('Grouped Messages');
    console.log('Message inside the group');
    console.groupEnd();

    console.time('Timer');
    setTimeout( ()=>{
        console.timeEnd('Timer');
    }, 1000);

}