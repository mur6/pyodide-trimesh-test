import numpy

def make_ones(jsarray):
    ary = jsarray.to_py()
    return numpy.ones(ary)

def make_eye(num):
    return numpy.eye(num)
