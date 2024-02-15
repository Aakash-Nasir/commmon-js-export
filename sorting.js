 //INSERTION SORT
function insertionsort(arr){
    for(let i =1; i<arr.length; i++){
        let currElement = arr[i];
        let j = i -1;
        while(j>=0 && arr[j] >currElement){
            arr[j+1] = arr[j]; //shifting the element to the right side
            j--;

        }
        arr[j+1] = currElement;
    }
}


//BUBBLE SORT
function bubblesort(arr){
    let n =arr.length;
    //this function applied comparison and immediate swaps with

    for(let i =0; i<n-1; i++){
        let isSwapped = false;
        //we just need n-1 iterations because after than we will be only
       for(let j =0; j < n-i-1; j++){
        if(arr[j] > arr [j+1]){
            //swap
            let temp =arr[i];
            arr[i]=arr[j];
            arr[j] =temp;
            isSwapped =true;

        }
       }
       if(isSwapped == false) break;
    }
}

function minIndex(arr ,i){
    //this fncn return the index of the min element
    let minIndex = i;
    for(let j=i+1; j<arr.length; j++){
        //we go in the remianing array from [i+1, n-1]
        if(arr[j] < arr[minIndex]){
            minIndex =j;
        }
    }
    return minIndex;
}

//Selection Sort
function selectionSort(arr){ //we assume array is integer array
    for(let i =0; i<arr.length; i++){
        //[i,n-1] -> unsorted region
        let minIndex =getMinIndex(arr,i);
        //swap the ith element with nim index
        if( i != minIndex){
            let temp = arr[i];
            arr[i] =arr[minIndex];
            arr[minIndex] =temp;
        }
    }

}

module.exports.insertionsort =insertionsort;
module.exports.bubblesort = bubblesort;
module.exports.selectionSort =selectionSort;