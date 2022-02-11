#include<stdio.h>
#include<stdlib.h>
struct node
{
    int data;
    struct node *prev;
    struct node *next;
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

int searchnode(int k){
    struct node *temp=head;
    while(temp!=NULL){
        if(temp->data==k){
             return 1;
        }
         temp=temp->next;
    }return -1;
}
int main(){
    
    addlast(10);
    addlast(20);
    addlast(30);
    addlast(40);
    printlist();
    int k;
    printf("\nEnter the search key:");
    scanf("%d",&k);
   printf("%d", searchnode(k));
   return 0;
    
}
