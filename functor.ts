/**
 * Functor
 * u['fantasy-land/map'](a => a) is equivalent to u (identity)
 * u['fantasy-land/map'](x => f(g(x))) is equivalent to u['fantasy-land/map'](g)['fantasy-land/map'](f) (composition)
 *
 * fantasy-land/map method
 * fantasy-land/map :: Functor f => f a ~> (a -> b) -> f b
 * A value which has a Functor must provide a fantasy-land/map method. The fantasy-land/map method takes one argument:
 *
 * u['fantasy-land/map'](f)
 * f must be a function,
 *
 * If f is not a function, the behaviour of fantasy-land/map is unspecified.
 * f can return any value.
 * No parts of f's return value should be checked.
 * fantasy-land/map must return a value of the same Functor
 *
 * Apply
 * A value that implements the Apply specification must also implement the Functor specification.
 *
 * v['fantasy-land/ap'](u['fantasy-land/ap'](a['fantasy-land/map'](f => g => x => f(g(x))))) is equivalent to v['fantasy-land/ap'](u)['fantasy-land/ap'](a) (composition)
 *
 * fantasy-land/ap method
 * fantasy-land/ap :: Apply f => f a ~> f (a -> b) -> f b
 * A value which has an Apply must provide a fantasy-land/ap method. The fantasy-land/ap method takes one argument:
 *
 * a['fantasy-land/ap'](b)
 * b must be an Apply of a function
 *
 * If b does not represent a function, the behaviour of fantasy-land/ap is unspecified.
 * b must be same Apply as a.
 * a must be an Apply of any value
 *
 * fantasy-land/ap must apply the function in Apply b to the value in Apply a
 *
 * No parts of return value of that function should be checked.
 * The Apply returned by fantasy-land/ap must be the same as a and b
 *
 * Applicative
 * A value that implements the Applicative specification must also implement the Apply specification.
 *
 * v['fantasy-land/ap'](A['fantasy-land/of'](x => x)) is equivalent to v (identity)
 * A['fantasy-land/of'](x)['fantasy-land/ap'](A['fantasy-land/of'](f)) is equivalent to A['fantasy-land/of'](f(x)) (homomorphism)
 * A['fantasy-land/of'](y)['fantasy-land/ap'](u) is equivalent to u['fantasy-land/ap'](A['fantasy-land/of'](f => f(y))) (interchange)
 *
 * fantasy-land/of method
 * fantasy-land/of :: Applicative f => a -> f a
 * A value which has an Applicative must provide a fantasy-land/of function on its type representative. The fantasy-land/of function takes one argument:
 *
 * F['fantasy-land/of'](a)
 * Given a value f, one can access its type representative via the constructor property:
 *
 * f.constructor['fantasy-land/of'](a)
 * fantasy-land/of must provide a value of the same Applicative
 *
 * No parts of a should be checked
 *
 * Chain
 * A value that implements the Chain specification must also implement the Apply specification.
 *
 * m['fantasy-land/chain'](f)['fantasy-land/chain'](g) is equivalent to m['fantasy-land/chain'](x => f(x)['fantasy-land/chain'](g)) (associativity)
 *
 * fantasy-land/chain method
 * fantasy-land/chain :: Chain m => m a ~> (a -> m b) -> m b
 * A value which has a Chain must provide a fantasy-land/chain method. The fantasy-land/chain method takes one argument:
 *
 * m['fantasy-land/chain'](f)
 * f must be a function which returns a value
 *
 * If f is not a function, the behaviour of fantasy-land/chain is unspecified.
 * f must return a value of the same Chain
 * fantasy-land/chain must return a value of the same Chain
 *
 * @format
 */

export class Functor<T> {
  constructor(private _value: T) {}

  get value(): T {
    return this._value;
  }

  //  Applicative
  public static ['fantasy-land/of'] = Functor.of;
  public static of<TVal>(val: TVal) {
    return new Functor(val);
  }

  // Apply
  public ['fantasy-land/ap'] = this.ap;
  public ap<TMap>(c: Functor<(val: T) => TMap>) {
    return c.map(fn => this.map(fn));
  }

  // Map
  public ['fantasy-land/map'] = this.map;
  public map<TMap>(fn: (val: T) => TMap) {
    return new Functor<TMap>(fn(this._value));
  }

  // Join
  public join() {
    return this._value;
  }
  public ['fantasy-land/chain'] = this.chain;
  public chain<TMap>(fn: (val: T) => TMap) {
    return this.map(fn).join();
  }
}

/**
 *
 *
 */
const something = new Functor(10);
const anOtherThing = Functor.of(10);

console.log(anOtherThing === something);

something.map(x => `${x}`);
