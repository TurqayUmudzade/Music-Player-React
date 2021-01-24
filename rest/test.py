def func(x, a, b, c):
  return a*x*x + b*x + c

X = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
Y = [69, 48, 31, 18, 9, 4, 3, 6, 13, 24, 39]
popt, pcov = scopt.curve_fit(func, X, Y)
print(popt[0])