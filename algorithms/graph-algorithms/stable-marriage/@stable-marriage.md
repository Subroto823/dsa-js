    Consider the following example.
    Let there be two men m1 and m2 and two women w1 and w2.
    Let m1’s list of preferences be {w1, w2} 
    Let m2’s list of preferences be {w1, w2} 
    Let w1’s list of preferences be {m1, m2} 
    Let w2’s list of preferences be {m1, m2}

    The matching { {m1, w2}, {w1, m2} } is not stable because m1 and w1 would prefer each other over their assigned partners.

    The matching {m1, w1} and {m2, w2} is stable because there are no two people of opposite sex that would prefer each other
    over their assigned partners.

Gale-Shapley algorithm idea-

    The idea is to iterate through all free men while there is any free man available.
    Every free man goes to all women in his preference list according to the order. 
    For every woman he goes to, he checks if the woman is free, if yes, they both become engaged. If the woman is not free, then the woman chooses either says no to him or dumps her current engagement according to her preference list.
    So an engagement done once can be broken if a woman gets better option. 

    Time Complexity of Gale-Shapley Algorithm is O(n2).

Gale-Shapley algorithm:

    # Initialize all men and women to free

    #while there exist a free man m who still hasn't proposed to every women
    
        # Choose such a man m
        # Let w be the highest-ranked woman in m's preference list to whom he hasn't proposed yet
            # if w is free
                #(m, w) become engaged

            # else if some pair (m', w) already exists(w is currently engaged to m')
                # if w prefers m to m' then
                    # (m, w) become engaged
                    # m' becomes free
                # else
                    #(m', w) remain engaged      
            # else
                # m remains free
            # Endif
        # Endif
    #Endwhile
    