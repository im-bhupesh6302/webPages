
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

int main()
{
    addfirst(10);
    addfirst(20);
    addfirst(30);
    printlist();

    return 0;
}
