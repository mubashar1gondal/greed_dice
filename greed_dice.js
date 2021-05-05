function score(dice) {
    var six = 0, five = 0, four = 0, three = 0, two = 0, one = 0;
    var i = 0;
    while (i < 5) {
        if (dice[i] == 6) { six++; }
        if (dice[i] == 5) { five++; }
        if (dice[i] == 4) { four++; }
        if (dice[i] == 3) { three++; }
        if (dice[i] == 2) { two++; }
        if (dice[i] == 1) { one++; }
        i++;
    }
    var r = 0;
    if (one > 2) { r += 1000; one -= 3; }
    if (six > 2) { r += 600; }
    if (five > 2) { r += 500; five -= 3; }
    if (four > 2) { r += 400; }
    if (three > 2) { r += 300; }
    if (two > 2) { r += 200; }
    r += one * 100;
    r += five * 50;
    return r;
}
console.log(score([1,1,1,3,1]))