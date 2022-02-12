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

void delete(int k){
    if(head==NULL)
        return;
    
    struct node *temp=head;
    while(temp != NULL&&temp->data !=k){
        temp=temp->next;
    }
    if(temp==NULL){
        printf("No key to delete..");
    }
    else if(temp==head){
        head=head->next;
        head->prev=NULL;
        free(temp);
    }
    else if(temp->next==NULL){
        temp->prev->next=NULL;
        free(temp);
    }
    else{
        temp->prev->next=temp->next;
        temp->next->prev=temp->prev;
        free(temp);
    }
}

int main(){
    
    addlast(10);
    addlast(20);
    addlast(30);
    addlast(40);
    printlist();
    int k;
    printf("\nKey to delete:");
    scanf("%d",&k);
    delete(k);
    printlist();
    
}
