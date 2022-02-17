#include<stdio.h>
#include<stdlib.h>
struct node{
    struct node *next;
    int data;
};

struct node *head=NULL;

void push(int val){
    struct node *newnode=malloc(sizeof(struct node));
    newnode->data=val;
    newnode->next=head;
    head=newnode;
}

void pop(){
    struct node *temp;
    if(head==NULL){
        printf("stack is empty");
    }else{
        printf("popped element %d\n",head->data);
        temp=head;
        head=head->next;
        free(temp);
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