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

int searchNode(int k){
    struct node *temp=head;
    do{
        if(temp->data==k)
            return 1;
        temp=temp->next;
    }while(temp!=head);
    return -1;
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
    int k;
    printf("\nEnter key to search:");
    scanf("%d",&k);
    printf("%d", searchNode(k));
    return 0;
}
