namespace safe {
	int sum(int a, int b)
	{
		int c = a + b;
		if(((a > 0) == (b > 0)) == c < 0) 
		{
			throw "Overflow";
		}
		return c;
	}

	int sub(int a, int b)
	{
		int c = a - b;
		if(((a > 0) != (b > 0)) == (c < 0)) 
		{
			throw "Overflow";
		}
		return c;
	}

	int mul(int a, int b)
	{
		int c = a * b;
		if(((a > 0) == (b > 0)) != (c > 0))
		{
			throw "Overflow";
		}
		return c;
	}
}

