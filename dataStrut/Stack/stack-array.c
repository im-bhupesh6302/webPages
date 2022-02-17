#include<stdio.h>

#define size 3
int arr[size];
int top =-1;

void push(int val){
     if(top==size-1)
       printf("stack is full");
    else{
        ++top;
        arr[top]=val;
    }
}
int pop(){
    if(top==-1)
        printf("stack is empty");
    else{
        printf("popped element %d\t",arr[top]);
        top--;
    }
}
int main(){
    push(10);
    push(20);
    push(30);
    pop();
    pop();
    pop();
    pop();
    return 0;
}