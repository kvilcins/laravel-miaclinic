<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CustomField
 * 
 * @property int $id
 * @property int $relation_id
 * @property string $relation_model
 * @property string $fields
 *
 * @package App\Models
 */
class CustomField extends Model
{
	protected $table = 'custom_fields';
	public $timestamps = false;

	protected $casts = [
		'relation_id' => 'int'
	];

	protected $fillable = [
		'relation_id',
		'relation_model',
		'fields'
	];
}
