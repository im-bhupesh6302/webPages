#include<stdio.h>
#include<stdlib.h>
struct node
{
    struct node *prev;
    struct node *next;
    int data;
};

struct node *head=NULL;

void addfirst(int val){
    struct node *newnode=malloc(sizeof(struct node));
    newnode ->data=val;
    if(head==NULL){
        newnode->next=NULL;
        newnode->prev=NULL;
        head=newnode;
    }else{
        newnode->prev=NULL;
        newnode->next=head;
        head->prev=newnode;
        head=newnode;
    }
}

void printlist(){
    struct node *temp=head;
    printf("Results are ");
    while(temp!=NULL){
        printf("%d\t",temp->data);
        temp=temp->next;
    }
}

int main(){
    
    addfirst(10);
    addfirst(20);
    addfirst(30);
    printlist();
    
}
