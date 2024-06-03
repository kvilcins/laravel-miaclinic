<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class AffiliateEmployee
 * 
 * @property int $affiliate_id
 * @property int $employee_id
 * 
 * @property Affiliate $affiliate
 * @property Employee $employee
 *
 * @package App\Models
 */
class AffiliateEmployee extends Model
{
	protected $table = 'affiliate_employee';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'affiliate_id' => 'int',
		'employee_id' => 'int'
	];

	protected $fillable = [
		'affiliate_id',
		'employee_id'
	];

	public function affiliate()
	{
		return $this->belongsTo(Affiliate::class);
	}

	public function employee()
	{
		return $this->belongsTo(Employee::class);
	}
}
