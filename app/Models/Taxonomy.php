<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Taxonomy
 * 
 * @property int $id
 * @property string $name
 * @property string $slug
 *
 * @package App\Models
 */
class Taxonomy extends Model
{
	protected $table = 'taxonomy';
	public $timestamps = false;

	protected $fillable = [
		'name',
		'slug'
	];
}
