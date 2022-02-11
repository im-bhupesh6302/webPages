
#include <stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node *next;
};
struct node *head=NULL;

void addfirst(int val){
    struct node *newnode=malloc(sizeof(struct node));
    newnode->data=val;
    newnode->next=head;
    head=newnode;
}

void printlist(){
    struct node *temp=head;
    printf("Results are\t");
    while(temp!=NULL){
        printf("%d\t",temp->data);
        temp=temp->next;
    }
}

void getmiddle(){
    struct node *fast=head;
    struct node *slow=head;
    if(head==NULL)
     printf("list is empty");
     
            while(fast->next != NULL && slow->next != NULL){
                 fast=fast->next->next;
                 slow=slow->next;
            } 
            printf("\n\nmiddle element is  %d",slow->data);
    

}

void main()
{
    addfirst(10);
    addfirst(20);
    addfirst(30);
   // addfirst(40);
    addfirst(50);
    printlist();
    getmiddle();

    
}
