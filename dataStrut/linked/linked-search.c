
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

int search(int k){
        struct node *temp=head;
        while(temp!=NULL){
            if(temp->data == k)
                  return 1;
             temp=temp->next;
        }
      return -1;
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
    int k;
    addfirst(10);
    addfirst(20);
    addfirst(30);
    printlist();
    printf("\nkey to search :");
    scanf("%d",&k);
    printf("%d",search(k));

    return 0;
}
