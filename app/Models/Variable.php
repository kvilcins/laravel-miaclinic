<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Variable
 * 
 * @property string $key
 * @property string $description
 * @property string|null $value
 *
 * @package App\Models
 */
class Variable extends Model
{
	protected $table = 'variables';
	protected $primaryKey = 'key';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'description',
		'value'
	];
}
