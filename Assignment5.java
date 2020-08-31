import java.util.*;

class Assignment5 {
    public static void main(String[] args) {
    
        Scanner sc = new Scanner(System.in);
        char[] array = new char[50];
        int P_counter = 0;
        int A_PATTERN_COUNTER = 0; // for identifying Pattern A
        int P_PATTERN_COUNTER = 0; // for identifying Pattern B
        
        System.out.print("Enter the size of attendance sheet");
        int size = sc.nextInt(); // getting size of Attendence sheet

        for(int i = 0; i < size; i++) {
            array[i] = sc.next().charAt(0);
        } 


        for(int i = 0; i < size; i++) {
            if(array[i] == 'P') {
                P_counter++; // increment P counter
            }
            int nextElement = i + 1;
            if(nextElement < size && array[i] == array[i + 1]) { // try to indentify Pattern
                if(array[i] == 'P') { 
                    A_PATTERN_COUNTER--; // if we got Present pattern then decrement 
                    P_PATTERN_COUNTER++; // increment P_PATTERN
                } else {
                    A_PATTERN_COUNTER++; // if Absent Pattern then Increment A Pattern
                }
            }
        }


        if(P_counter > size - P_counter) {
            System.out.println("This Student is Regular");
        } else if(A_PATTERN_COUNTER > P_PATTERN_COUNTER ) {
            System.out.println("The Student is regularly irregular.");
        } else {
            System.out.println("This Student is irregular.");
        }

    }
}

// Time Complexity will be O(n);

// A A P P  A A A P P A A P A P A A P P P A A, 

// A A P A A P A A P A A P A A P A A P A A P,









