enum ManaType {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  BLACK = 'black',
  WHITE = 'white',
}

const DEFAULT_TOKEN_CREATURE_OPTIONS = {
  power: 1,
  toughness: 1,
  tapped: false,
  mana: [ManaType.RED]
}

export class TokenCreature {
  private _options!: typeof DEFAULT_TOKEN_CREATURE_OPTIONS

  private _summoningSickness: boolean = true

  private _tapped: boolean

  private _power!: number

  private _toughness!: number

  get canAttack() {
    return !this._summoningSickness && !this._tapped
  }

  get power() {
    return this._power
  }

  get toughness() {
    return this._toughness
  }

  get hasSummoningSickness() {
    return this._summoningSickness
  }

  constructor(options: Partial<typeof DEFAULT_TOKEN_CREATURE_OPTIONS>) {
    this._options = {
      ...DEFAULT_TOKEN_CREATURE_OPTIONS,
      ...options
    }

    this._tapped = this._options.tapped
    this.reset()
  }

  public attack() {
    if (this._summoningSickness) {
      return
    }

    this._tapped = true
  }

  public clear() {
    this._summoningSickness = false
    this._tapped = false
  }

  private reset() {
    this._power = this._options.power
    this._toughness = this._options.toughness
  }
}