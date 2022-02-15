#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *next;
    struct node *prev;
};
struct node *head=NULL;

void addlast(int val){
    struct node *newnode=malloc(sizeof(struct node));
    newnode->data=val;

    if(head==NULL){
        newnode->next=newnode;
        newnode->prev=newnode;
        head=newnode;
    }
    else{
        struct node *last=head;
        while(last->next != head){
            last=last->next;
        }
        last->next=newnode;
        newnode->prev=last;
        newnode->next=head;
        head->prev=newnode;
    }
}

void printlist(){
    struct node *temp=head;
    printf("The results are: ");
    do{
        printf("%d\t",temp->data);
        temp=temp->next;
    }while(temp!=head);
}

int main(){
    addlast(10);
    addlast(20);
    addlast(30);
    addlast(40);
    printlist();
    return 0;
}
