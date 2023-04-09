# a. Sum Function
def Sum(a, b):
    return a + b
# b.Subtract Function
def Subtract(a, b):
#6.a.If one of the two numbers is zero and operand is subtract raise Value Error with message “ subtracting zero from Number “.
    if a==0 or b == 0:
        raise ValueError("subtracting zero from Number")
    else:
        return a - b
# c. Divide Function
def Divide(a, b):
# 6.b.If one of the two numbers is zero and operand is divide raise Zero division Error with message “ can’t divide with zero “.
    if a==0 or b == 0:
        raise ZeroDivisionError("Can't divide with zero")
    else:
        return (a / b)
# d.Multiply Function
# 6.c. If one of the two numbers is zero and operand is Multiply raise Value Error with message “ Multiply with Zero “.
def Multiply(a, b):
    if a == 0 or b == 0:
        raise ValueError("Multiply with Zero")
    else:
        return a * b