#include<stdio.h>
#include<stdlib.h>
struct node
{
    struct node *prev;
    struct node *next;
    int data;
};

struct node *head=NULL;

void addlast(int val){
    struct node *newnode=malloc(sizeof(struct node));
    newnode->data=val;
    if(head==NULL){
        newnode->next=NULL;
        newnode->prev=NULL;
        head=newnode;
    }else{
        struct node *last=head;
        while(last->next!=NULL){
            last=last->next;
        }
        last->next=newnode;
        newnode->prev=last;
        newnode->next=NULL;
    }
}

void printlist(){
    struct node *temp=head;
    printf("Results are\t");
    while(temp!=NULL){
        printf("%d\t",temp->data);
        temp=temp->next;
    }
}

int main(){
    
    addlast(10);
    addlast(20);
    addlast(30);
    printlist();
    
}
