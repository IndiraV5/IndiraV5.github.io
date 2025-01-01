var rNums = [];
disp = ()=>{
    
    var n = document.getElementById("numberOfElements").value;
    //document.getElementById("show").innerHTML = ;
    if(n<50){
        rNums = [];
        genRandom(n);
        document.getElementById("sortBtn").disabled = true;
    }
    else{
        alert("It will take a lot of time! Please enter something below 50");
        document.getElementById("sortBtn").disabled = false;
    }
    
}

genRandom = (num)=>{
    for(let i=0;i<num;i++){
        rNums[i] = Math.floor(Math.random()*10)
    }
    document.getElementById("randNums").innerHTML = "<a class='lead'>Generating array of "+num+" random numbers = </a>"+ "[" + rNums + "]";
    
    bubbleSort();
}

// Display canvas

let displayCanv = (arr)=>{
    let canv = document.getElementById("test");
    var context = canv.getContext("2d");
    context.clearRect(0, 0, canv.width, canv.height);

    for(let k=0;k<arr.length;k++){
        
        context.fillStyle = "#86e03d";
        context.fillRect(5+5*k,5,3,arr[k]*10);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

///////////////////////////////////////////////////////////////////////////////////
////////////////////////// Sorting algorithms ////////////////////////////////////

// default
async function bubbleSort(){
    var startTime = performance.now();
    let arr = rNums;
    let n = arr.length;
    
    for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-i-1; j++){ 
            if (arr[j] > arr[j+1]) 
            { 
                
                let temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
            }
            
            displayCanv(arr);
            
        }
        
        // Waiting for 300 milisecond length
        await sleep(300);
    }

    // Finding time elapsed
    var endTime = performance.now();

    // Displaying final output and other sorts
    let timeTaken = (((endTime-startTime - 300*(arr.length-1)))/1000).toFixed(5); 
    document.getElementById("sortedNums").innerHTML = "<a class='lead'>Final sorted array = </a>[" + arr + "] <br><a class='lead'> This took </a>" +timeTaken+ " seconds";
    document.getElementById("sortBtn").disabled = false;
    var div = document.getElementById("sortBtns");
    if(div.style.display==="none"){ div.style.display = "block"}
    console.log(mergeSort(rNums));
}


// Merge sort

function merge(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr[0]);
        leftArr = leftArr.slice(1)
    } else {
        sortedArr.push(rightArr[0]);
        rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length)
    sortedArr.push(leftArr.shift());
    while (rightArr.length)
    sortedArr.push(rightArr.shift());
    
    return sortedArr;
    }
function mergeSort(arr) {
    if (arr.length < 2) {
    return arr; }
    else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    var ans = merge(mergeSort(leftArr), mergeSort(rightArr));
    displayCanv(ans);
    return ans;
    
    }
}

function MergeSort(){
    let startTime = performance.now();
    let ans = mergeSort(rNums);
    displayCanv(ans);
    let endTime = performance.now();
    let timeTaken = ((endTime-startTime)/1000).toFixed(4);
    console.log(ans);
    document.getElementById("mergeOutput").innerHTML = "<a class='lead'> Merge Sort took </a>" +timeTaken+ " seconds";
}
     

// Heap sort
async function heapSort(){
    alert("I am working on that :P");
}



//Quick sort
async function quickSort(){
    alert("I am working on that :P");
}

//Selection sort
async function selectionSort(){
    let arr = rNums;
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]<min){
                min = arr[j];
            }
        }
        arr[i] = min;
        min = arr[i+1];
        displayCanv(arr);
        await sleep(300);
    }
    
    console.log(arr);
}
