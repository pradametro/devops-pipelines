console.log('Starting test ...');

setTimeout(() => {
    console.log('Waiting 3 seconds');
    console.log('Test complete');
    
    // This line tells GitHub Actions: "Everything finished perfectly!"
    process.exit(0); 
}, 3000);
