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

void deletenode(int k){
    if(head==NULL){
        return;
    }
    if(head->data==k&&head->next==head){
        free(head);
        head=NULL;
    }
    else if(head->data==k){
        struct node *last=head,*temp;
        while(last->next!=head){
            last=last->next;
        }
        temp=head;
        last->next=head->next;
        head=head->next;
        free(temp);
    }
    else{
        struct node *current=head,*temp;
        while(current->next!=head){
            if(current->next->data==k){
                temp=current->next;
                current->next=temp->next;
                free(temp);
                break;
            }else{
            current=current->next;
            }
        }
         if(current->next==head)
                printf("Key not found..\n");
            
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
    int k;
    printf("\nEnter key to Delete:");
    scanf("%d",&k);
    deletenode(k);
    printlist();
    return 0;
}
