#include<stdio.h>
#include<stdlib.h>

struct node{
    int data;
    struct node *next;
};
struct node *head=NULL;

void addfirst(int val){
    struct node *newnode=malloc(sizeof(struct node));
    newnode->data=val;

    if(head==NULL){
        newnode->next=newnode;
        head=newnode;
    }
    else {
        struct node *temp=head;
        while(temp->next!=head){
            temp=temp->next;
        }
        temp->next=newnode;
        newnode->next=head;
        head=newnode;
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
    addfirst(10);
    addfirst(20);
    addfirst(30);
    printlist();
    return 0;
}
