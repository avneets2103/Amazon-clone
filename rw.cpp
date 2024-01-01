#include<iostream>
using namespace std;

int gcd(long long int a, long long int b){
    if(b==0){
        return a;
    }
    return gcd(b, a%b);
}

int lcm(long long int a, long long int b){
    return (a/gcd(a,b))*b;
}

int main(){
    int t;
    cin>>t;
    while(t--){
        long long int a, b;
        cin>>a>>b;
        if(b%a==0){
            if(a==1){cout<<b<<endl;}
            else{cout<<2*b<<endl;}
        } 
        else{
            cout<<lcm(a, b)<<endl;
        }
    }
    return 0;
}
